from django.urls import path
from . import views

from sgalunos.api.viewsets import SGAlunosViewSet

urlpatterns = [
    path('', views.index, name='index'),
    path('alunos', views.alunos, name='alunos'),
    path('aluno/<int:matricula>', views.getAluno, name='aluno'),
    
]