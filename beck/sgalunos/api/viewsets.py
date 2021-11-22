from rest_framework import viewsets
from sgalunos.api import serializers
from sgalunos import models

class SGAlunosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SGAlunosSerializers
    queryset = models.Aluno.objects.all()
    