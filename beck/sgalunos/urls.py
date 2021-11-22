from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('alunos', views.alunos, name='alunos'),
    path('consultaravaliacoes', views.consultarAvaliacoes, name='consultaravaliacoes'),
    path('alteraraluno/<int:matricula>', views.alterarAluno, name='alteraraluno'),
    path('deletaraluno/<int:matricula>', views.deletarAluno, name='deletaraluno'),
    path('consultaraluno/<int:matricula>', views.consultarAluno, name='consultaraluno'),
    path('consultaralunonome/<str:nome>', views.consultarAlunoNome, name='consultaralunonome'),

]