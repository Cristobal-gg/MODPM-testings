from django.db import models

#Clase Book convertida a tabla en modelo de BBDD

class Book(models.Model):
    title = models.CharField(max_length=100) #Campo de texto
    author = models.CharField(max_length=100) #Campo de texto
    published_date = models.DateField(blank=True, null=True) #Campo Date

    def __str__(self):
        return self.title