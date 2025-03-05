from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def message(request):
    return Response({'message': 'Hello, World!'}, status=status.HTTP_200_OK)