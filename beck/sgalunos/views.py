from django.http.response import JsonResponse
from django.shortcuts import render


# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import fields
from sgalunos.api import serializers
from sgalunos.models import Aluno

def index(request):
    return HttpResponse("Hello, world!")

def alunos(request):
    a = Aluno.objects.all()
    return JsonResponse({'alunos':[(aluno.getMatricula(), aluno.getNome(), aluno.getCPF(), aluno.getAvaliacao()) for aluno in a]})

def consultarAvaliacoes(request):
    a = Aluno.objects.all()
    return JsonResponse({'alunos':[(aluno.getNome(), aluno.getAvaliacao()) for aluno in a]})

@csrf_exempt
def alterarAluno(request, matricula): 
    a = Aluno.objects.get(pk=matricula)
    r = eval(request.body)
    a.setNome(r['nome'])
    a.setCPF(r['cpf'])
    a.setAvaliacao(r['avaliacao'])
    serializer = serializers.SGAlunosSerializers(a)
    a.save()
    return JsonResponse(serializer.data)

@csrf_exempt
def deletarAluno(request, matricula):
    a = Aluno.objects.get(pk=matricula)
    serializer = serializers.SGAlunosSerializers(a)
    a.delete()
    return JsonResponse(serializer.data)

@csrf_exempt
def consultarAluno(request, matricula):
    a = Aluno.objects.get(pk=matricula)
    serializer = serializers.SGAlunosSerializers(a)
    return JsonResponse(serializer.data)