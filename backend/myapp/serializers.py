from rest_framework import serializers
from .models import ChessPlayer

class ChessPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChessPlayer
        fields = ['id', 'name', 'level', 'experience']