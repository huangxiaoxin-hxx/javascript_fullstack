declare function assigned(all: number): Direction;
declare function assigned(topAndBottom: number, leftAndRight: number): Direction;
interface Direction {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
