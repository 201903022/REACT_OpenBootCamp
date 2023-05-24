export const Levels = { 
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    NORMAL: 'NORMAL',
    LOW: 'LOW',
}
export function getLevel(level){ 
    switch (level) {
        case Levels.HIGH:
            return Levels.HIGH;
        case Levels.MEDIUM:
            return Levels.MEDIUM;
        case Levels.NORMAL:
            return Levels.NORMAL ;
        case Levels.LOW:
            return Levels.LOW;
        default:
            return 'secondary';
    }

}