gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDtl_9595grassObjects1= [];
gdjs.Untitled_32sceneCode.GDtl_9595grassObjects2= [];
gdjs.Untitled_32sceneCode.GDplayerWulfObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerWulfObjects2= [];
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("playerWulf"), gdjs.Untitled_32sceneCode.GDplayerWulfObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerWulfObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerWulfObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDtl_9595grassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtl_9595grassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerWulfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerWulfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDtl_9595grassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtl_9595grassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerWulfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerWulfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
