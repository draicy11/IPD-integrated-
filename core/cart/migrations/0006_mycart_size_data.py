# Generated by Django 2.2.6 on 2020-07-03 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0005_mycart_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='mycart',
            name='size_data',
            field=models.CharField(default='{}', max_length=250),
        ),
    ]