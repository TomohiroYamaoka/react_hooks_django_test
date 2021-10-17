from django.db.models import query
from django.shortcuts import render
from react_hooks_django_test.backend.api import serializers

# Create your views here.
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import isAuthenticated, AllowAny
from rest_framework import generics
from django.contrib.auth.models import Permission, User
from .models import Task
from rest_framework import viewsets
from serializers import TaskSerializer, UserSerializers


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = (AllowAny,)


class ManageUserView(generics.RetriviewUpdateAPIview):
    serializers_class = UserSerializers
    authentication_classes = (TokenAuthentication,)
    permission_classes = (isAuthenticated,)

    def get_object(self):
        return self.request.user


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (isAuthenticated,)
