from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.addTask, name='create'),
    path('tasks/', views.getTasks, name='get-tasks'),
    path('completed/<str:pk>/', views.markCompleted, name='comp-tasks'),
    path('del/<str:pk>/', views.delTask, name='del-tasks'),

]
