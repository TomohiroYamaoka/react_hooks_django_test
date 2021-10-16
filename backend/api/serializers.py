from rest_framework import selializers
from .models import Task
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializers(selializers.ModelSerializer):
    class Meta:
        model: User
        fields = {'id', 'username', 'password'}
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            Token.object.create(user=user)
            return user

    class TaskSerializer(selializers.HyperlinkModelSelializer):

        created_at = selializers.DateTimeField(
            format="%Y-%m-%d %H:%M", read_only=True)
        updated_at = selializers.DateTimeField(
            format="%Y-%m-%d %H:%M", read_only=True)

        class Meta:
            model = Task
            fileld = ['id', 'title', 'created_at', 'updated_at']
