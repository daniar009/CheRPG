from rest_framework import viewsets
from .models import ChessPlayer
from .serializers import ChessPlayerSerializer

class ChessPlayerViewSet(viewsets.ModelViewSet):
    queryset = ChessPlayer.objects.all()
    serializer_class = ChessPlayerSerializer