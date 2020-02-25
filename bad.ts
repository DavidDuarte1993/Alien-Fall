const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    action: cc.ActionInterval;

    onCollisionEnter(other,self)
    {
        if(other.tag == 2)
        {
            this.node.destroy();
            this.node.parent.getComponent('Game').addScore();
        }
        if(other.tag == 1)
        {
            cc.director.loadScene("Game");
        }
    }

    moveToPlayer()
    {
        var moveAction = cc.moveTo(3,this.node.parent.getChildByName('soldier1').position.x,this.node.parent.getChildByName('soldier1').position.y);
        return moveAction;
    }

    onLoad () 
    {
        this.action = this.moveToPlayer();
        this.node.runAction(this.action);

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        
        cc.director.preloadScene("Game");
    }
    start () 
    {

    }

}
