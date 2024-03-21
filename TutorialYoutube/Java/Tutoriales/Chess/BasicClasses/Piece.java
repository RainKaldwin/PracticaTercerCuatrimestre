/*
The basic building block of the system, 
every piece will be placed on a spot. 
Piece class is an abstract class. 
The extended classes (Pawn, King, Queen, Rook, 
Knight, Bishop) 
implements the abstracted operations.
 */

 package TutorialYoutube.Java.Tutoriales.Chess.BasicClasses;

 public abstract class Piece{
    private boolean Killed = false;
    private boolean White = false;

    public Piece (boolean oWhite){
        this.setWhite(oWhite);
    }

    public boolean isWhite(){
        return this.White;
    }

    public void setWhite(boolean oWhite){
        this.White = oWhite; 
    }

    public boolean isKilled(){
        return this.Killed;
    }

    public void setKilled(boolean oKilled){
        this.Killed = oKilled;
    }

    public abstract boolean canMove(Board oBoard,Spot start,Spot end);
 }