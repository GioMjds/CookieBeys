from django.urls import path
from . import views # type: ignore

urlpatterns = [
    path('message', views.message, name='message')
]
