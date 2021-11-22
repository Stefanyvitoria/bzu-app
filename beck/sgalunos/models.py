from enum import _auto_null
from django.db import models
import uuid

# Create your models here.
class Aluno(models.Model):
    matricula = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100, null=False)
    cpf = models.CharField(max_length=14, unique=True, null=False)
    avaliacao = models.IntegerField(null=False)

    def __str__(self):
        return self.nome
        # return f'matricula: {self.matricula}, nome: {self.nome}, cpf: {self.cpf}, avaliacao: {self.avaliacao}\n'

    def setMatricula(self, matricula):
        self.matricula = matricula
    
    def setNome(self, nome):
        self.nome = nome
    
    def setCPF(self, cpf):
        self.cpf = cpf

    def setAvaliacao(self, avaliacao):
        self.avaliacao = avaliacao
    
    def getMatricula(self):
        return self.matricula
    
    def getNome(self):
        return self.nome
    
    def getCPF(self):
        return self.cpf

    def getAvaliacao(self):
        return self.avaliacao


    # def getAluno(self):
    #     return [self.matricula, self.nome, self.cpf, self.avaliacao]