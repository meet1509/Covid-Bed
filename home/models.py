from django.db import models

# Create your models here.

class Hospital(models.Model):
    hname = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    price = models.IntegerField()
    vacant_beds = models.IntegerField()

    def __str__(self):
        return self.hname
    
