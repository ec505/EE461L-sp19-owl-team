# Generated by Django 2.1.5 on 2019-03-28 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plantsite', '0004_plantecoregions'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlantCsvEcoregions',
            fields=[
                ('dbid', models.IntegerField(blank=True, primary_key=True, serialize=False)),
                ('ecoregion', models.TextField(blank=True, db_column='Ecoregion', null=True)),
                ('paragraph', models.TextField(blank=True, db_column='Paragraph', null=True)),
                ('trees', models.TextField(blank=True, db_column='Trees', null=True)),
                ('shrubs', models.TextField(blank=True, db_column='Shrubs', null=True)),
                ('succulents', models.TextField(blank=True, db_column='Succulents', null=True)),
                ('vines', models.TextField(blank=True, db_column='Vines', null=True)),
                ('vine', models.TextField(blank=True, db_column='Vine', null=True)),
                ('conifers', models.TextField(blank=True, db_column='Conifers', null=True)),
                ('grasses', models.TextField(blank=True, db_column='Grasses', null=True)),
                ('wildflowers', models.TextField(blank=True, db_column='Wildflowers', null=True)),
                ('image', models.TextField(blank=True, db_column='Image', null=True)),
            ],
            options={
                'db_table': 'plant_csv_ecoregions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Stateparks',
            fields=[
                ('dbid', models.IntegerField(blank=True, primary_key=True, serialize=False)),
                ('name', models.TextField(blank=True, db_column='Name', null=True)),
                ('latitude', models.FloatField(blank=True, db_column='Latitude', null=True)),
                ('longitude', models.FloatField(blank=True, db_column='Longitude', null=True)),
            ],
            options={
                'db_table': 'stateparks',
                'managed': False,
            },
        ),
    ]