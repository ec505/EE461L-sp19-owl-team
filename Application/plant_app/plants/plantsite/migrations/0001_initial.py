# Generated by Django 2.1.5 on 2019-03-30 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EcoRegion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('photo', models.ImageField(default='ecoregions', upload_to='ecoregions')),
            ],
        ),
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('common_name', models.CharField(max_length=50)),
                ('scientific_name', models.CharField(max_length=50)),
                ('photo', models.ImageField(default='stateparks', upload_to='plants')),
            ],
        ),
        migrations.CreateModel(
            name='PlantCsv',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nativeadapted', models.TextField(blank=True, null=True)),
                ('image', models.TextField(blank=True, null=True)),
                ('name', models.TextField(blank=True, null=True)),
                ('nickname', models.TextField(blank=True, null=True)),
                ('planttype', models.TextField(blank=True, null=True)),
                ('lightreq', models.TextField(blank=True, null=True)),
                ('waterdemand', models.TextField(blank=True, null=True)),
                ('landscapeuse', models.TextField(blank=True, null=True)),
                ('ornamentalvalue', models.TextField(blank=True, null=True)),
                ('wildlifevalue', models.TextField(blank=True, null=True)),
                ('season', models.TextField(blank=True, null=True)),
                ('plantform', models.TextField(blank=True, null=True)),
                ('plantspread', models.TextField(blank=True, null=True)),
                ('plantheight', models.TextField(blank=True, null=True)),
                ('deciduousevergreen', models.TextField(blank=True, null=True)),
                ('soil', models.TextField(blank=True, null=True)),
                ('reproduction', models.TextField(blank=True, null=True)),
                ('note', models.TextField(blank=True, null=True)),
                ('sciname', models.TextField(blank=True, null=True)),
                ('lat', models.FloatField(blank=True, null=True)),
                ('longi', models.FloatField(blank=True, null=True)),
                ('econregion', models.TextField(blank=True, null=True)),
                ('statepark', models.TextField(blank=True, null=True)),
                ('lifecycle', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'plant_csv',
            },
        ),
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
                ('stateparks', models.TextField(blank=True, db_column='StateParks', null=True)),
                ('plants', models.TextField(blank=True, db_column='Plants', null=True)),
            ],
            options={
                'db_table': 'plant_csv_ecoregions',
            },
        ),
        migrations.CreateModel(
            name='StatePark',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('photo', models.ImageField(default='stateparks', upload_to='stateparks')),
            ],
        ),
        migrations.CreateModel(
            name='Stateparks',
            fields=[
                ('dbid', models.IntegerField(blank=True, primary_key=True, serialize=False)),
                ('name', models.TextField(blank=True, db_column='Name', null=True)),
                ('latitude', models.FloatField(blank=True, db_column='Latitude', null=True)),
                ('longitude', models.FloatField(blank=True, db_column='Longitude', null=True)),
                ('region', models.TextField(blank=True, db_column='Region', null=True)),
                ('image', models.TextField(blank=True, db_column='Image', null=True)),
                ('url', models.TextField(blank=True, db_column='Url', null=True)),
                ('description', models.TextField(blank=True, db_column='Description', null=True)),
                ('plantlist', models.TextField(blank=True, db_column='PlantList', null=True)),
                ('address', models.TextField(blank=True, db_column='Address', null=True)),
            ],
            options={
                'db_table': 'plant_csv_stateparks',
            },
        ),
    ]
