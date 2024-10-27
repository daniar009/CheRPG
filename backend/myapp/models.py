from django.db import models

class ChessPlayer(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField()
    experience = models.IntegerField()

    def __str__(self):
        return self.name