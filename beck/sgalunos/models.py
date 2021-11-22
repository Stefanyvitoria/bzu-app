from enum import _auto_null
from django.db import models

# Create your models here.
class Aluno(models.Model):
    matricula = models.AutoField(primary_key=True, null=False)
    nome = models.CharField(max_length=100, null=False)
    cpf = models.CharField(max_length=14, unique=True, null=False)
    avaliacao = models.IntegerField()

    def __str__(self):
        return self.nome

    def getAluno(self):
        return [self.matricula, self.nome, self.cpf, self.avaliacao]