/*
Board is an 8×8 set of boxes
containing all active chess pieces.
 */

 package TutorialYoutube.Java.Tutoriales.Chess.BasicClasses;

import TutorialYoutube.Java.Tutoriales.Chess.AdvancedClasses.Bishop;
import TutorialYoutube.Java.Tutoriales.Chess.AdvancedClasses.Knight;
import TutorialYoutube.Java.Tutoriales.Chess.AdvancedClasses.Pawn;
import TutorialYoutube.Java.Tutoriales.Chess.AdvancedClasses.Rook;


public class Board{
    Spot[][] boxes;

    public Board(){
        this.resetBoard();
    }

    public Spot getBox(int x, int y){
        if(x<0||x>7||y<0||y>7){
            throw new IndexOutOfBoundsException("Index out of Bound");
        }
        return boxes[x][y];
    }

    public void resetBoard(){
        

        //inicializar piezas blancas

        boxes[0][1]= new Spot(0, 0, new Rook(true));
        boxes[0][1]= new Spot(0, 1, new Knight(true));
        boxes[0][1]= new Spot(0, 2, new Bishop(true));
        //
        boxes[0][1]= new Spot(1, 0, new Pawn(true));
        boxes[0][1]= new Spot(1, 1, new Pawn(true));
        
        //inicializar piezas negras
        boxes[7][0]= new Spot(7, 0, new Rook(false));
        boxes[7][1]= new Spot(7, 1, new Knight(false));
        boxes[7][2]= new Spot(7, 2, new Bishop(false));
        //
        boxes[6][0]= new Spot(6, 0, new Pawn(false));
        boxes[6][1]= new Spot(6, 1, new Pawn(false));
    
        //inicializar las cajas que quedan sin piezas

        for(int i = 2; i<6; i++){
            for(int j = 0; j<8; j++){
                boxes[i][j] = new Spot (i,j,null);
            }
        }
    
    }


 }