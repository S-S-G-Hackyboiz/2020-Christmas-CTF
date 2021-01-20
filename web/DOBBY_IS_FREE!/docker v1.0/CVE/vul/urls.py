from django.urls import path

from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('post', views.list, name='index'),
    path('post/<int:blog_id>/', views.index, name='index'),
]
