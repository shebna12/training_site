import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { materials } from '../materials';
@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {
  material;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.material = materials[+params.get('materialId')];
  });
}

}

function AppCtrl($scope, $sce) {
    // ...
    $scope.setProject = function (id) {
      $scope.currentProject = $scope.projects[id];
      $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject.url);
    }
}