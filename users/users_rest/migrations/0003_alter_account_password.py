# Generated by Django 4.0.3 on 2022-07-15 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_rest', '0002_alter_account_options_alter_account_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='password',
            field=models.CharField(default=False, max_length=25),
        ),
    ]