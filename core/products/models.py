from django.db import models

class Product(models.Model):
    
    PRODUCT_TYPE = (
        ('SH', 'SHOES'),
        ('JE', 'JEANS'),
        ('TP', 'TOP'),
    )
    
    category    = models.CharField(choices=PRODUCT_TYPE,max_length=100, default='SH')
    name        = models.CharField(max_length=100) 
    price       = models.DecimalField(decimal_places=2, max_digits=9)
    description = models.TextField()
    image_url   = models.URLField(default='none')
    best_info   = models.BooleanField(default=True)

    def __str__(self):
        return self.name