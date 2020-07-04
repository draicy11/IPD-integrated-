from django.db import models
from django.views import generic
from django.contrib.auth.models import User
from products.models import Product

# Create your models here.

class MyOrder(models.Model):   
    user       = models.ForeignKey(User, on_delete= models.CASCADE)
    products   = models.ManyToManyField(Product)
    total      = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, null=True)
    quan_data  = models.TextField()
    size_data  = models.CharField(max_length=250, null=False, blank=False, default='{}')
    date       = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username