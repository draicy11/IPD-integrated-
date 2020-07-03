from rest_framework.decorators import api_view
from rest_framework.response import Response
from cart.models import MyCart
from .serializers import MyCartSerializer
from django.contrib.auth.models import User


@api_view(['GET'])
def MyCartDetailView(request,token):
    user=User.objects.get(auth_token=token)
    cart = MyCart.objects.get(user = user)
    serializer = MyCartSerializer(cart, many= False)
    return Response(serializer.data)
