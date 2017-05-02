from django.db import models
# Create your models here.

class ATM(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    latitudes = models.FloatField()
    longitudes = models.FloatField()
    #point = models.PointField()
    extras = models.CharField(max_length=200)
    def __unicode__(self):
        return self.title

class atm1(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    latitudes = models.FloatField()
    longitudes = models.FloatField()
    # point = models.PointField()
    one = models.BooleanField()
    two = models.BooleanField()
    three = models.BooleanField()
    def __unicode__(self):
        return self.title

class  Users(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    def __unicode__(self):
        return self.title