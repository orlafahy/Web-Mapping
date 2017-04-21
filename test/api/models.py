from django.db import models

# Create your models here.

class ATM(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    latitudes = models.FloatField()
    longitudes = models.FloatField()
    extra = models.CharField(max_length=200)
    def __unicode__(self):
        return self.title