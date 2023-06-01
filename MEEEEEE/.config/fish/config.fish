if status is-interactive
    # Commands to run in interactive sessions can go here
end

function fish_greeting
end

export PATH="$PATH:/home/$USER/.local/bin"
export PATH="$PATH:/home/$USER/MyBar"
export BAT_THEME="Catppuccin-mocha"
export MICRO_TRUECOLOR=1



# Aliases
alias r='ranger'
alias s='sudo'
alias sr='sudo ranger'
alias luzNoturna='redshift -O 3200'
alias noLuzNoturna='killall redshift'

#feh bg Wallpaper
alias wallpaper='feh --bg-fill'

# fzf
alias f='fzf'

# cd
alias gcf='cd $HOME/.config'
alias gdl='cd $HOME/Downloads'

# apt
alias install='sudo nala install'
alias remove='sudo nala remove'
alias purge='sudo nala purge'
alias show='nala show'
alias search='nala search'
alias list='nala list'
alias update='sudo nala update'
alias upgrade='sudo nala upgrade'
alias uplist='nala list --upgradable'

# ls exa
alias l='exa --color=always --icons --group-directories-first'
alias ls='exa -al --header --icons --group-directories-first'
alias df='df -h'
alias free='free -h'

# Dotfiles & Files
alias bs='micro ~/.config/fish/config.fish'
alias e="micro"
alias gc="git clone"
alias nf="neofetch"

# Dunst
alias hi="notify-send 'Hi there!' 'Welcome to my Bspwm desktop! ' -i ''"

# BatCat
alias cat="batcat"

# Add Color
alias egrep='grep --color=auto'

export VISUAL=micro;
export EDITOR=micro;




# Starship

# starship init fish | source
