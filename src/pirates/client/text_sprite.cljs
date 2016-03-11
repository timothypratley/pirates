(ns pirates.client.text-sprite)

#_(defn round-rect [ctx x y w h r]
  (doto ctx
    (.beginPath)
    (.moveTo (+ x r) y)
    (.lineTo (- (+ x w) r) y)
    (.quadraticCurveTo (+ x w) y (+ x w) (+ y r))
    (.lineTo (+ x w) (- (+ y h) r))
    (.quadraticCurveTo (+ x w) (+ y h) (- (+ x w) r) (+ y h))
    (.lineTo (+ x r) (+ y h))
    (.quadraticCurveTo x (+ y h) x (- (+ y h) r))
    (.lineTo x (+ y r))
    (.quadraticCurveTo x y (+ x r) y)
    (.closePath)
    (.fill)
    (.stroke)))

(js* "function roundRect(ctx, x, y, w, h, r) \n{\n    ctx.beginPath();\n    ctx.moveTo(x+r, y);\n    ctx.lineTo(x+w-r, y);\n    ctx.quadraticCurveTo(x+w, y, x+w, y+r);\n    ctx.lineTo(x+w, y+h-r);\n    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);\n    ctx.lineTo(x+r, y+h);\n    ctx.quadraticCurveTo(x, y+h, x, y+h-r);\n    ctx.lineTo(x, y+r);\n    ctx.quadraticCurveTo(x, y, x+r, y);\n    ctx.closePath();\n    ctx.fill();\n\tctx.stroke();   \n}")
(js* "function makeTextSprite( message, parameters )\n    {\n        if ( parameters === undefined ) parameters = {};\n        var fontface = parameters.hasOwnProperty(\"fontface\") ? parameters[\"fontface\"] : \"Arial\";\n        var fontsize = parameters.hasOwnProperty(\"fontsize\") ? parameters[\"fontsize\"] : 18;\n        var borderThickness = parameters.hasOwnProperty(\"borderThickness\") ? parameters[\"borderThickness\"] : 4;\n        var borderColor = parameters.hasOwnProperty(\"borderColor\") ?parameters[\"borderColor\"] : { r:0, g:0, b:0, a:1.0 };\n        var backgroundColor = parameters.hasOwnProperty(\"backgroundColor\") ?parameters[\"backgroundColor\"] : { r:255, g:255, b:255, a:1.0 };\n        var textColor = parameters.hasOwnProperty(\"textColor\") ?parameters[\"textColor\"] : { r:0, g:0, b:0, a:1.0 };\n\n        var canvas = document.createElement('canvas');\n        var context = canvas.getContext('2d');\n        context.font = \"Bold \" + fontsize + \"px \" + fontface;\n        var metrics = context.measureText( message );\n        var textWidth = metrics.width;\n\n        context.fillStyle   = \"rgba(\" + backgroundColor.r + \",\" + backgroundColor.g + \",\" + backgroundColor.b + \",\" + backgroundColor.a + \")\";\n        context.strokeStyle = \"rgba(\" + borderColor.r + \",\" + borderColor.g + \",\" + borderColor.b + \",\" + borderColor.a + \")\";\n\n        context.lineWidth = borderThickness;\n        roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.4 + borderThickness, 8);\n\n        context.fillStyle = \"rgba(\"+textColor.r+\", \"+textColor.g+\", \"+textColor.b+\", 1.0)\";\n        context.fillText( message, borderThickness, fontsize + borderThickness);\n\n        var texture = new THREE.Texture(canvas) \n        texture.needsUpdate = true;\n\n        var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } );\n        var sprite = new THREE.Sprite( spriteMaterial );\n        sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);\n        return sprite;  \n    }")

(defn make [text]
  (js/makeTextSprite text))