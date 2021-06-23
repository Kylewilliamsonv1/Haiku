import Haiku from './js/haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#haikuSubmit').click(function () {
  const line1 = $('#line1').val();
  const line2 = $('#line2').val();
  const line3 = $('#line3').val();
  const userHaiku = new Haiku(line1, line2, line3);
  console.log(userHaiku.joinLines());
  $("#outputHaiku").html(userHaiku.joinLines());
});