from .models import List
from .serializers import ListSerializers
from rest_framework.generics import  ListAPIView,CreateAPIView,DestroyAPIView

# Create your views here.
class show(ListAPIView):
    queryset=List.objects.all()
    serializer_class = ListSerializers

class delete(DestroyAPIView):
    queryset=List.objects.all()
    serializer_class = ListSerializers
    


class create(CreateAPIView):
    queryset=List.objects.all()
    serializer_class = ListSerializers

