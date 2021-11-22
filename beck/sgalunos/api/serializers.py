from django.db.models import fields
from rest_framework import serializers

from sgalunos import models


class SGAlunosSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Aluno
        fields = '__all__'