import 'ol/ol.css';
import Map from 'ol/Map';
import GPX from 'ol/format/GPX';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Vector as VectorLayer} from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {fromLonLat} from 'ol/proj'

const style = {
  'LineString': new Style({
    stroke: new Stroke({
      color: '#FAA500',
      width: 2,
    }),
  }),
  'MultiLineString': new Style({
    stroke: new Stroke({
      color: '#FAA500',
      width: 2,
    }),
  }),
};

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
      style: function (feature) {
        return style[feature.getGeometry().getType()];
      },
    }),
    new VectorLayer({
      source: new VectorSource({
        url: 'cleaned_derwentwater_loop.gpx',
        format: new GPX(),
      }),
      style: function (feature) {
        return style[feature.getGeometry().getType()];
      },
    }),
    new VectorLayer({
      source: new VectorSource({
        url: 'cleaned_blaeberry.gpx',
        format: new GPX(),
      }),
      style: function (feature) {
        return style[feature.getGeometry().getType()];
      },
    }),
    new VectorLayer({
      source: new VectorSource({
        url: 'cleaned_la_trig.gpx',
        format: new GPX(),
      }),
      style: function (feature) {
        return style[feature.getGeometry().getType()];
      },
  })
    ],
    view: new View({
      center: fromLonLat([-3.0068, 54.4792]),
      zoom: 11
    })
  });