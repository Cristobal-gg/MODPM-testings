from rest_framework import serializers
from .models import Book

#Clase que convierte el modelo Book serializandolo en formato JSON
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'published_date'] #campos a serializar del modelo
