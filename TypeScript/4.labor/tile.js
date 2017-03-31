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
        if (this.state === TileState.Empty && state != TileState.Empty) {
            this.state = state;
            if (state == TileState.X) {
                this.element.addClass("mark mark-x");
                this.element.append($("<i class='glyphicon glyphicon-remove'></i>"));
            }
             else if (state === TileState.O) {
                this.element.addClass("mark mark-o");
                this.element.append($("<i class='glyphicon glyphicon-record'></i>"));
            }
        }
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsMkNBQVMsQ0FBQTtJQUNULG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQ7SUFHSSxjQUFtQixPQUFjO1FBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUZqQyxVQUFLLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQTtJQUVDLENBQUM7SUFFcEMsdUJBQVEsR0FBUixVQUFTLEtBQWdCO1FBQ3JCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFFM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFbkIsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUwsV0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksb0JBQUkifQ==