"use strict";
const SettlementNature={
    seed:1947,
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        this.drawGrass(ctx,left+18,top+18,right-18,bottom-18,random);
        this.drawTrees(ctx,left,top,right,bottom,random);
        this.drawBushes(ctx,left,top,right,bottom,random);
        this.drawRocks(ctx,left,top,right,bottom,random);
    },
    blocked(x,y){
        if(this.rect(x,y,-115,95,115,155))return true;
        if(this.rect(x,y,-305,35,155,160))return true;
        if(this.rect(x,y,155,45,155,160))return true;
        if(this.rect(x,y,270,-240,120,230))return true;
        if(this.rect(x,y,-430,-190,165,155))return true;
        if(this.rect(x,y,-410,18,820,55))return true;
        if(this.rect(x,y,-25,-255,50,420))return true;
        if(this.rect(x,y,-345,-220,140,110))return true;
        if(this.rect(x,y,225,155,190,100))return true;
        if(this.rect(x,y,-330,185,150,90))return true;
        return false;
    },
    rect(x,y,cx,cy,width,height){
        return x>=cx-width/2&&x<=cx+width/2&&y>=cy-height/2&&y<=cy+height/2;
    },
    drawGrass(ctx,left,top,right,bottom,random){
        for(let i=0;i<520;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
            const s=3+random()*6;
            ctx.fillStyle=random()>.5?"#3f4c3e":"#354136";
            ctx.fillRect(x,y-s,s*.45,s);
            ctx.fillRect(x+s*.35,y-s*.7,s*.4,s*.7);
            if(random()>.8){
                ctx.fillStyle="#4b5847";
                ctx.fillRect(x+s*.7,y-s*.9,s*.3,s*.55);
            }
        }
    },
    drawTrees(ctx,left,top,right,bottom,random){
        for(let i=0;i<34;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
            this.drawTree(ctx,x,y,.7+random()*.45);
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
    },
    drawBushes(ctx,left,top,right,bottom,random){
        for(let i=0;i<42;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
            this.drawBush(ctx,x,y,random);
        }
    },
    drawBush(ctx,x,y,random){
        const s=7+random()*9;
        ctx.fillStyle="#1d241f";
        ctx.fillRect(x-s,y-s*.35,s*2,s);
        ctx.fillRect(x-s*.55,y-s,s*1.1,s);
        ctx.fillStyle="#354335";
        ctx.fillRect(x-s*.72,y-s*.28,s*.8,s*.5);
        ctx.fillRect(x-s*.05,y-s*.72,s*.9,s*.58);
        ctx.fillStyle="#4a5747";
        ctx.fillRect(x-s*.38,y-s*.52,s*.32,s*.22);
    },
    drawRocks(ctx,left,top,right,bottom,random){
        for(let i=0;i<70;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
            const s=4+random()*8;
            ctx.fillStyle="#1d2220";
            ctx.fillRect(x-s,y-s*.4,s*2,s);
            ctx.fillStyle="#3b423e";
            ctx.fillRect(x-s*.6,y-s*.65,s*1.25,s*.5);
            ctx.fillStyle="#505650";
            ctx.fillRect(x-s*.3,y-s*.52,s*.5,s*.2);
        }
    }
};
window.KAVRYXSettlementNature=SettlementNature;