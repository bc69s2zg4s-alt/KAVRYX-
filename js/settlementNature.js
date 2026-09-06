"use strict";
const SettlementNature={
    seed:1947,
    draw(ctx,width,height,centerX,centerY){
        const map=window.KAVRYXSettlementMap;
        if(!map)return;
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        this.drawGrass(ctx,map,random);
        this.drawRocks(ctx,map,random);
        this.drawBushes(ctx,map,random);
        this.drawTrees(ctx,map,random);
    },
    drawGrass(ctx,map,random){
        for(let i=0;i<850;i++){
            const x=map.left+random()*map.width;
            const y=map.top+random()*map.height;
            if(map.blocked(x,y,5))continue;
            const s=3+random()*7;
            ctx.fillStyle=random()>.5?"#3f4c3e":"#354136";
            ctx.fillRect(x,y-s,s*.45,s);
            ctx.fillRect(x+s*.35,y-s*.7,s*.4,s*.7);
            if(random()>.78){
                ctx.fillStyle="#4b5847";
                ctx.fillRect(x+s*.7,y-s*.9,s*.3,s*.55);
            }
        }
    },
    drawRocks(ctx,map,random){
        for(let i=0;i<100;i++){
            const x=map.left+random()*map.width;
            const y=map.top+random()*map.height;
            if(map.blocked(x,y,12))continue;
            const s=4+random()*9;
            ctx.fillStyle="#1d2220";
            ctx.fillRect(x-s,y-s*.4,s*2,s);
            ctx.fillStyle="#3b423e";
            ctx.fillRect(x-s*.6,y-s*.65,s*1.25,s*.5);
            ctx.fillStyle="#505650";
            ctx.fillRect(x-s*.3,y-s*.52,s*.5,s*.2);
        }
    },
    drawBushes(ctx,map,random){
        for(let i=0;i<55;i++){
            const x=map.left+random()*map.width;
            const y=map.top+random()*map.height;
            if(map.blocked(x,y,18))continue;
            this.drawBush(ctx,x,y,random);
        }
    },
    drawBush(ctx,x,y,random){
        const s=7+random()*10;
        ctx.fillStyle="#1d241f";
        ctx.fillRect(x-s,y-s*.35,s*2,s);
        ctx.fillRect(x-s*.55,y-s,s*1.1,s);
        ctx.fillStyle="#354335";
        ctx.fillRect(x-s*.72,y-s*.28,s*.8,s*.5);
        ctx.fillRect(x-s*.05,y-s*.72,s*.9,s*.58);
        ctx.fillStyle="#4a5747";
        ctx.fillRect(x-s*.38,y-s*.52,s*.32,s*.22);
    },
    drawTrees(ctx,map,random){
        for(let i=0;i<38;i++){
            const x=map.left+random()*map.width;
            const y=map.top+random()*map.height;
            if(map.blocked(x,y,32))continue;
            this.drawTree(ctx,x,y,.65+random()*.45);
        }
    },
    drawTree(ctx,x,y,scale){
        ctx.fillStyle="#171b18";
        ctx.fillRect(x-6*scale,y-2*scale,12*scale,40*scale);
        ctx.fillStyle="#493b2d";
        ctx.fillRect(x-4*scale,y,8*scale,37*scale);
        ctx.fillStyle="#222a24";
        ctx.fillRect(x-25*scale,y-40*scale,50*scale,34*scale);
        ctx.fillRect(x-20*scale,y-56*scale,40*scale,25*scale);
        ctx.fillRect(x-10*scale,y-69*scale,20*scale,18*scale);
        ctx.fillStyle="#384738";
        ctx.fillRect(x-21*scale,y-36*scale,42*scale,26*scale);
        ctx.fillRect(x-16*scale,y-51*scale,32*scale,21*scale);
        ctx.fillRect(x-7*scale,y-63*scale,14*scale,14*scale);
        ctx.fillStyle="#4a5847";
        ctx.fillRect(x-14*scale,y-40*scale,10*scale,7*scale);
        ctx.fillRect(x+5*scale,y-52*scale,8*scale,6*scale);
    }
};
window.KAVRYXSettlementNature=SettlementNature;