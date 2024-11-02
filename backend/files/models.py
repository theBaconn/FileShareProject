from django.db import models

class File(models.Model):
    filename = models.CharField(max_length=100)
    ownerID = models.IntegerField(null=True)
    privacy = models.CharField(max_length=16)
