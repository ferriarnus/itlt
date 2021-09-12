function initializeCoreMod() {
    var opcodes = Java.type("org.objectweb.asm.Opcodes");
    var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
    var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI")

    // Author: Paint_Ninja
    // Reason: Restores the ability to change the Minecraft window title
    // Todo: Make a Forge PR for a "WindowTitleChangedEvent" or similar
    return {
        "CustomWindowTitle": {
            "target": {
                "type": "METHOD",
                "class": "net.minecraft.client.Minecraft",
                "methodName": ASMAPI.mapMethod("m_91341_"),
                "methodDesc": "()V"
            },
            "transformer": function(methodNode) {
                methodNode.visitMethodInsn(opcodes.INVOKESTATIC, "dk/zlepper/itlt/client/helpers/ClientUtils", "setCustomWindowTitle", "()V", false);
                //return methodNode;
                //for (var i = 0; i < methodNode.instructions.size(); i++) {
                //    var instruction = methodNode.instructions.get(i)
                //    print(instruction.name);
                //    print(instruction.desc);
                //}
                //methodNode.instructions.insert(new InsnNode())
                methodNode.instructions.insert(new InsnNode(opcodes.RETURN));
                return methodNode;
            }
        }
    };
}