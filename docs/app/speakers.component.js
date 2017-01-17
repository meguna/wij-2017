"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SpeakersComponent = (function () {
    function SpeakersComponent() {
    }
    SpeakersComponent = __decorate([
        core_1.Component({
            selector: 'speakers',
            template: "\n    <h1>Speakers</h1>\n    <div class=\"speaker-list-wrapper\">\n\n      <div class=\"speaker-wrapper\">\n        <img class=\"speaker-img\" src=\"assets/sample-speaker.png\" alt=\"speaker\"/>\n        <div class=\"bio-wrapper\">\n          <h3 class=\"speaker-name\">Speaker Name</h3>\n          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; \"Kasegu Tsuma \u2022 Sodateru Otto \u2015 Fuufu no Senryaku Teki Yakuwari Koukan\u201D and \u201CFutari no Kosodate Ruulu.\u201D In 2013, she was a researcher at the Showa Women\u2019s University\u2019s Modern Business Research Institute, and currently she is Vice President at Toshima & Associates. </p>\n        </div>\n      </div>\n      <div class=\"speaker-wrapper\">\n        <img class=\"speaker-img\" src=\"assets/sample-speaker.png\" alt=\"speaker\"/>\n        <div class=\"bio-wrapper\">\n          <h3 class=\"speaker-name\">Speaker Name</h3>\n          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; \"Kasegu Tsuma \u2022 Sodateru Otto \u2015 Fuufu no Senryaku Teki Yakuwari Koukan\u201D and \u201CFutari no Kosodate Ruulu.\u201D In 2013, she was a researcher at the Showa Women\u2019s University\u2019s Modern Business Research Institute, and currently she is Vice President at Toshima & Associates. </p>\n        </div>\n      </div>\n      <div class=\"speaker-wrapper\">\n        <img class=\"speaker-img\" src=\"assets/sample-speaker.png\" alt=\"speaker\"/>\n        <div class=\"bio-wrapper\">\n          <h3 class=\"speaker-name\">Speaker Name</h3>\n          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; \"Kasegu Tsuma \u2022 Sodateru Otto \u2015 Fuufu no Senryaku Teki Yakuwari Koukan\u201D and \u201CFutari no Kosodate Ruulu.\u201D In 2013, she was a researcher at the Showa Women\u2019s University\u2019s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>\n        </div>\n      </div>\n\n    </div>\n  ",
            styles: ["\n    .speaker-img {\n      height:200px;\n    }\n    .speaker-wrapper {\n      display:flex;\n      flex-direction:row;\n      align-items:flex-start;\n      padding-bottom:50px;\n    }\n    .bio-wrapper {\n      padding-left: 30px;\n    }\n    .speaker-list-wrapper {\n      display: flex;\n      flex-direction: column;\n    }\n    .speaker-name {\n      margin-top:0;\n    }\n\n    @media screen and (max-width:600px) {\n      .speaker-wrapper {\n        flex-direction:column;\n        justify-content:center;\n        align-items:center;\n      }\n      .bio-wrapper {\n        padding:0;\n      }\n      .speaker-img {\n        padding-bottom: 5px;\n      }\n      .speaker-name {\n        margin:5px;\n      }\n      p {\n        margin:0;\n      }\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], SpeakersComponent);
    return SpeakersComponent;
}());
exports.SpeakersComponent = SpeakersComponent;
//# sourceMappingURL=speakers.component.js.map