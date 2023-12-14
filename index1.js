document.addEventListener('DOMContentLoaded', function () {

    var progBar = document.querySelector('.progress-bar');

    document.getElementById('33per').addEventListener('click', function () {
        progBar.style.width = '33%';
        progBar.innerHTML = '33%';
    });

    document.getElementById('66per').addEventListener('click', function () {
        progBar.style.width = '66%';
        progBar.innerHTML = '66%';
    });

    document.getElementById('100per').addEventListener('click', function () {
        progBar.style.width = '100%';
        progBar.innerHTML = '100%';
    });
});