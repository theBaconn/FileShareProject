# Generated by Django 5.1.2 on 2024-10-31 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='ownerID',
            field=models.IntegerField(null=True),
        ),
    ]