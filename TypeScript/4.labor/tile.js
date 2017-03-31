"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TileState;
(function (TileState) {
    TileState[TileState["Empty"] = 0] = "Empty";
    TileState[TileState["X"] = 1] = "X";
    TileState[TileState["O"] = 2] = "O";
})(TileState = exports.TileState || (exports.TileState = {}));
var Tile = (function () {
    function Tile(element) {
        this.element = element;
        this.state = TileState.Empty;
    }
    Tile.prototype.setState = function (state) {
        if (this.state === TileState.Empty && state !== TileState.Empty) {
            this.state = state;
            if (state === TileState.X) {
                this.element.addClass("mark mark-x");
                this.element.append($("<i class='glyphicon glyphicon-record'></i>"));
            }
            else if (state === TileState.O) {
                this.element.addClass("mark mark-o");
                this.element.append($("<i class='glyphicon glyphicon-remove'></i>"));
            }
        }
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFNBRVg7QUFGRCxXQUFZLFNBQVM7SUFDakIsMkNBQVMsQ0FBQTtJQUFFLG1DQUFLLENBQUE7SUFBRSxtQ0FBSyxDQUFBO0FBQzNCLENBQUMsRUFGVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUVwQjtBQUVEO0lBR0ksY0FBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGbEMsVUFBSyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFFRyxDQUFDO0lBRXZDLHVCQUFRLEdBQVIsVUFBUyxLQUFnQjtRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNmLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDZixDQUFDLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLG9CQUFJIn0=