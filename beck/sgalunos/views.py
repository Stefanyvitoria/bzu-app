from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from sgalunos.models import Aluno

def index(request):
    return HttpResponse("Hello, world. You're at the sga index.")

def alunos(request):
    # return HttpResponse("ALUNOS")
    a = Aluno.objects.all()
    return HttpResponse(a)

def getAluno(request, matricula):
    a = Aluno.objects.get(pk=matricula)
    return HttpResponse(a.getAluno())