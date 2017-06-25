(function() {
    function AblumCtrl() {
      this.albumData = angular.copy(albumPicasso);
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);

})();
