# Generated by Django 4.1.3 on 2023-02-28 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mosaics", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="mosaic",
            name="max_strength",
            field=models.CharField(max_length=100, null=True),
        ),
    ]
