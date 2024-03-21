
package TutorialYoutube.Java.Tutoriales.Chess.BasicClasses;
/*
 A spot represents one block of the 8×8 grid
 and an optional piece.
 */

 public class Spot{

    private Piece piece;
    private int x;
    private int y;

    public Spot(int x, int y, Piece piece){
        this.setPiece(piece);
        this.setX(x);
        this.setY(y);
    }

    public Piece getPiece(){
        return this.piece;
    }

    public void setPiece(Piece oPiece){
        this.piece = oPiece;
    }

    public int getX(){
        return this.x;
    }

    public void setX(int oX){    
        this.x = oX;
    }

    public int getY(){
        return this.y;
    }

    public void setY(int oY){    
        this.y = oY;
    }








 }