import 'ol/ol.css';
import Map from 'ol/Map';
import GPX from 'ol/format/GPX';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Vector as VectorLayer} from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj'

const map = new Map({
    target: 'map',
    layers: [
    new TileLayer({
      source: new Stamen({
        layer: 'terrain-background',
      }),
    }),
    new VectorLayer({
        source: new VectorSource({
          url: 'cleaned_threlkeld_old_railway.gpx',
          format: new GPX(),
        }),
    })
    ],
    view: new View({
      center: fromLonLat([-3.1342, 54.6038]),
      zoom: 10
    })
  });