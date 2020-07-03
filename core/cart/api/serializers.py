from rest_framework import serializers
from cart.models import MyCart

class MyCartSerializer(serializers.ModelSerializer):
	class Meta:
		model = MyCart
		fields = '__all__'



